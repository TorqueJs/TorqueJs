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

function getDisplayName(WrappedComponent: { displayName: string, name: string }) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export const WithBehaviorSubject = function<T,>(ChildComponent: any, subject: BehaviorSubject<T>) {
    class withBehaviorSubject extends React.Component<{}, { subjectData: T, subscriptionGuid: string, subscriptionChanged: boolean }> {
        constructor(props: any) {
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

        render(): JSX.Element {
            return (
                <ChildComponent 
                    subjectDataUsed={ () => this.subjectDataUsed() } 
                    subjectUpdated={ this.state.subscriptionChanged } 
                    subjectData={ this.state.subjectData } 
                    { ...this.props } />
            )
        }
    }

    (withBehaviorSubject as any).displayName = `WithBehaviorSubject${getDisplayName(ChildComponent)}`;
    return withBehaviorSubject;
}