import React from 'react';
import { BehaviorSubject } from "./BehaviorSubject";
import { GenerateGuid } from "./GenerateGuid";

export interface IWithBehaviorSubject<T,> {
    subjectUpdated: boolean;
    subjectData: T;

    /**
     * important to call this to prevent infinite loops.
     */
    subjectDataUsed: () => void;
}

function getDisplayName(WrappedComponent: any) {
    return WrappedComponent?.displayName || WrappedComponent?.name || 'Component';
}

interface State<T> { subjectData: T, subscriptionGuid: string, subscriptionChanged: boolean };

export const WithBehaviorSubject = function<
    T,
    P extends IWithBehaviorSubject<T>,
    C,
    R extends { new (props: P): React.Component<P> },
>(
    ChildComponent: R, 
    subject: BehaviorSubject<T>
): R {
    
    type Props = JSX.LibraryManagedAttributes<C, Omit<P, keyof State<T>>>;

    class HOCWithBehaviorSubject extends React.Component<Props, State<T>> {

        constructor(props: Props) {
            super(props);
            this.state = {
                subjectData: subject.getCurrentValue(),
                subscriptionGuid: GenerateGuid(),
                subscriptionChanged: true
            }
        }

        subjectDataUsed(): void {
            // set subscription changed to false so it wont have infinite update loop.
            this.setState({
                subscriptionChanged: false
            });
        }

        componentDidMount(): void {
            subject.subscribe(this.state.subscriptionGuid, (value: T) => {
                this.setState({ 
                    subjectData: value,
                    subscriptionChanged: true
                });
            })
        }

        componentWillUnmount(): void {
            subject.unsubscribe(this.state.subscriptionGuid)
        }

        render(): React.ReactNode {
            return (
                <ChildComponent 
                    subjectDataUsed={ () => this.subjectDataUsed() } 
                    subjectUpdated={ this.state.subscriptionChanged } 
                    subjectData={ this.state.subjectData } 
                    { ...(this.props as any) } />
            )
        }
    }
    (HOCWithBehaviorSubject as any).displayName = `WithBehaviorSubject${getDisplayName(ChildComponent)}`;
    return (HOCWithBehaviorSubject as any) as R;
}