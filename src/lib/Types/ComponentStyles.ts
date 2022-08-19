export interface ComponentAttributes {
    styles: ComponentStyling;
    identifier?: string;
    config?: TorqueButtonConfig;
}

export interface ComponentStyling {
    /**
     * represents the component styles on default state
     */
    default: TorqueCSSObject;
    focus?: TorqueCSSObject;
    active?: TorqueCSSObject;
    hover?: TorqueCSSObject;
    before?: TorqueCSSObject;
    after?: TorqueCSSObject;
    firstChild?: TorqueCSSObject;
    checked?: TorqueCSSObject;
    disabled?: TorqueCSSObject;
    invalid?: TorqueCSSObject;
    firstOfType?: TorqueCSSObject;
    lastChild?: TorqueCSSObject;
    lastOfType?: TorqueCSSObject;
}

export interface ComponentConfig {
    [key: string]: any;
}

export interface TorqueButtonConfig extends ComponentConfig {
    animation?: 'none' | 'material-ripple' | 'highlight-text';
}

export interface TorqueCheckboxConfig extends ComponentConfig {

}

export interface ComponentStyles {
    component: ComponentType;
    attributes: ComponentAttributes | ComponentAttributes[];
}

export enum ComponentType {
    TORQUE_BUTTON = 'TORQUE_BUTTON',
    TORQUE_CHECKBOX = 'TORQUE_CHECKBOX'
}

type ColorNames = 'black'|'silver'|'gray'|'white'|'maroon'|'red'|'purple'|'fuchsia'|'green'|'lime'|'olive'|'yellow'|'navy'|'blue'|'teal'|'aqua'|'aliceblue'|'antiquewhite'|'aqua'|'aquamarine'|'azure'|'beige'|'bisque'|'black'|'blanchedalmond'|'blue'|'blueviolet'|'brown'|'burlywood'|'cadetblue'|'chartreuse'|'chocolate'|'coral'|'cornflowerblue'|'cornsilk'|'crimson'|'cyan'|'darkblue'|'darkcyan'|'darkgoldenrod'|'darkgray'|'darkgreen'|'darkgrey'|'darkkhaki'|'darkmagenta'|'darkolivegreen'|'darkorange'|'darkorchid'|'darkred'|'darksalmon'|'darkseagreen'|'darkslateblue'|'darkslategray'|'darkslategrey'|'darkturquoise'|'darkviolet'|'deeppink'|'deepskyblue'|'dimgray'|'dimgrey'|'dodgerblue'|'firebrick'|'floralwhite'|'forestgreen'|'fuchsia'|'gainsboro'|'ghostwhite'|'gold'|'goldenrod'|'gray'|'green'|'greenyellow'|'grey'|'honeydew'|'hotpink'|'indianred'|'indigo'|'ivory'|'khaki'|'lavender'|'lavenderblush'|'lawngreen'|'lemonchiffon'|'lightblue'|'lightcoral'|'lightcyan'|'lightgoldenrodyellow'|'lightgray'|'lightgreen'|'lightgrey'|'lightpink'|'lightsalmon'|'lightseagreen'|'lightskyblue'|'lightslategray'|'lightslategrey'|'lightsteelblue'|'lightyellow'|'lime'|'limegreen'|'linen'|'magenta'|'maroon'|'mediumaquamarine'|'mediumblue'|'mediumorchid'|'mediumpurple'|'mediumseagreen'|'mediumslateblue'|'mediumspringgreen'|'mediumturquoise'|'mediumvioletred'|'midnightblue'|'mintcream'|'mistyrose'|'moccasin'|'navajowhite'|'navy'|'oldlace'|'olive'|'olivedrab'|'orange'|'orangered'|'orchid'|'palegoldenrod'|'palegreen'|'paleturquoise'|'palevioletred'|'papayawhip'|'peachpuff'|'peru'|'pink'|'plum'|'powderblue'|'purple'|'red'|'rosybrown'|'royalblue'|'saddlebrown'|'salmon'|'sandybrown'|'seagreen'|'seashell'|'sienna'|'silver'|'skyblue'|'slateblue'|'slategray'|'slategrey'|'snow'|'springgreen'|'steelblue'|'tan'|'teal'|'thistle'|'tomato'|'turquoise'|'violet'|'wheat'|'white'|'whitesmoke'|'yellow'|'yellowgreen';
type Color = ColorNames | string;
type Unit<T extends string> = `${number}${T}`; 
type CM = Unit<"cm">;
type MM = Unit<"mm">;
type IN = Unit<"in">;
type PX = Unit<"px">;
type PT = Unit<"pt">;
type PC = Unit<"pc">;
type EM = Unit<"em">;
type REM = Unit<"rem">;
type PERCENT = Unit<"%">;
type FixedLengthUnits = CM | MM | IN | PX | PT | PC | EM | REM;
type Negative<T extends string> = `-${T}`;
type NegativeFixedLengthUnits = Negative<FixedLengthUnits>;
type LengthUnits = FixedLengthUnits | NegativeFixedLengthUnits;
type PercentLengthUnits = LengthUnits | PERCENT | Negative<PERCENT>;
type AlignContent = 'stretch'|'center'|'flex-start'|'flex-end'|'space-between'|'space-around'|'initial'|'inherit';
type AlignItems = 'stretch'|'center'|'flex-start'|'flex-end'|'baseline'|'initial'|'inherit';
type AlignSelf = 'auto'|'stretch'|'center'|'flex-start'|'flex-end'|'baseline'|'initial'|'inherit';
type All = 'initial'|'inherit'|'unset';
type Background = string | Color;
type BackgroundBlendMode = 'normal'|'multiply'|'screen'|'overlay'|'darken'|'lighten'|'color-dodge'|'saturation'|'color'|'luminosity';
type BackgroundClip = 'border-box'|'padding-box'|'content-box'|'initial'|'inherit';
type BorderWidth = 'medium'|'thin'|'thick'|LengthUnits|'initial'|'inherit';
type BorderStyle = 'none'|'hidden'|'dotted'|'dashed'|'solid'|'double'|'groove'|'ridge'|'inset'|'outset'|'initial'|'inherit';
type BorderColor = Color|'transparent'|'initial'|'inherit';
type Border = string;
type BoxShadow = 'none'| string |'inset'|'initial'|'inherit';
type BoxSizing = 'content-box'|'border-box'|'initial'|'inherit';
type Cursor = 'alias'|'all-scroll'|'auto'|'cell'|'context'|'col-resize'|'copy'|'crosshair'|'default'|'e-resize'|'ew-resize'|'help'|'move'|'n-resize'|'ne-resize'|'nesw'|'ns-resize'|'nw-resize'|'nwse'|'no-drop'|'none'|'not-allowed'|'pointer'|'progress'|'row-resize'|'s-resize'|'se-resize'|'sw-resize'|'text'|'vertical'|'w-resize'|'wait'|'zoom'|'zoom'|'initial'|'inherit';
type Direction = 'ltr'|'rtl'|'initial'|'inherit';
type Display = 'inline'|'block'|'contents'|'flex'|'grid'|'inline-block'|'inline-flex'|'inline-grid'|'inline-table'|'list-item'|'run-in'|'table'|'table-caption'|'table-column-group'|'table-header-group'|'table-footer-group'|'table-row-group'|'table-cell'|'table-column'|'table-row'|'none'|'initial'|'inherit';
type FlexBasis = PercentLengthUnits|'auto'|'initial'|'inherit';
type FlexShrink = number|'initial'|'inherit';
type FlexGrow = number|'initial'|'inherit'
type Flex = `${FlexGrow}` | `${FlexGrow} ${FlexShrink}` | `${FlexGrow} ${FlexShrink} ${FlexBasis}`;

type BackgroundColor = string;
type BorderRadius = string;
type BorderTopRightRadius = string;
type BorderTopLeftRadius = string;
type BorderBottomLeftRadius = string;
type BorderBottomRightRadius = string;
type CaptionSide = string;
type Clear = string;
type Clip = string;
type ColumnCount = string;
type ColumnFill = string;
type ColumnGap = string;
type ColumnRule = string;
type ColumnRuleColor = string;
type ColumnRuleStyle = string;
type ColumnRuleWidth = string;
type ColumnSpan = string;
type ColumnWidth = string;
type Columns = string;
type EmptyCells = string;
type Float = string;
type Font  = string;
type FontFamily = string;
type FontSize = string;
type FontStyle = string;
type FontWeight = string;
type Gap = string;
type Grid = string;
type GridArea = string;
type GridAutoColumns = string;
type GridAutoFlow = string;
type GridAutoRows = string;
type GridColumn = string;
type GridColumnGap = string;
type GridColumnEnd = string;
type GridColumnStart = string;
type GridRow = string;
type GridGap = string;
type GridGapEnd = string;
type GridGapRow = string;
type GridGapStart = string;
type GridTemplate = string;
type GridTemplateAreas = string;
type GridTemplateColumns = string;
type GridTemplateRows = string;
type Height = string;
type JustifyContent = string;
type LetterSpacing = string;
type LineHeight = string;
type ListStyle = string;
type ListStylePosition = string;
type ListStyleType = string;
type Margin = string;
type MarginBottom = string;
type MarginLeft = string;
type MarginRight = string;
type MarginTop = string;
type MaxHeight = string;
type MaxWidth = string;
type MinHeight = string;
type MinWidth = string;
type ObjectFit = string;
type ObjectPosition = string;
type Opacity = string;
type Order = string;
type Outline = string;
type OutlineStyle = string;
type OutlineWidth = string;
type OutlineColor = string;
type OutlineOffset = string;
type Overflow = string;
type OverflowWrap = string;
type OverflowX = string;
type OverflowY = string;
type Padding = string;
type PaddingLeft = string;
type PaddingBotton = string;
type PaddingRight = string;
type PaddingTop = string;
type PointerEvents = string;
type Position = string;
type RowGap = string;
type TableLayout = string;
type TextAlign = string;
type TextDecoration = string;
type TextDecorationStyle = string;
type TextDecorationThickness = string;
type TextDecorationLine = string;
type TextDecorationColor = string;
type TextIndent = string;
type TextOverflow = string;
type TextShadow = string;
type TextTransform = string;
type Transform = string;
type TransformOrigin = string;
type TransformStyle = string;
type Transition = string;
type TransitionDelay = string;
type TransitionDuration = string;
type TransitionProperty = string;
type TransitionTimingFunction = string;
type UserSelect = string;
type Visibility = string;
type VerticalAlign = string;
type WhiteSpace = string;
type Width = string;
type WordBreak = string;
type WordWrap = string;
type WordSpacing = string;
type ZIndex = string;

interface CustomCSSTarget {
    [key: string]: any;
}

export interface TorqueCSSObject extends CustomCSSTarget {
    accentColor?: Color;
    alignContent?: AlignContent;
    alignItems?: AlignItems;
    alignSelf?: AlignSelf;
    all?: All;
    background?: Background;
    backgroundBlendMode?: BackgroundBlendMode;
    backgroundClip?: BackgroundClip;
    borderWidth?: BorderWidth;
    borderStyle?: BorderStyle;
    borderColor?: BorderColor;
    border?: Border;
    borderBottom?: Border;
    borderBottomStyle?: BorderStyle;
    borderBottomColor?: BorderColor;
    borderBottomWidth?: BorderWidth;
    borderLeft?: Border;
    borderLeftStyle?: BorderStyle;
    borderLeftColor?: BorderColor;
    borderLeftWidth?: BorderWidth;
    borderTop?: Border;
    borderTopStyle?: BorderStyle;
    borderTopColor?: BorderColor;
    borderTopWidth?: BorderWidth;
    borderRight?: Border;
    borderRightStyle?: BorderStyle;
    borderRightColor?: BorderColor;
    borderRightWidth?: BorderWidth;
    top?: PercentLengthUnits;
    left?: PercentLengthUnits;
    bottom?: PercentLengthUnits;
    right?: PercentLengthUnits;
    boxShadow?: BoxShadow;
    boxSizing?: BoxSizing;
    caretColor?: Color;
    color?: Color;
    cursor?: Cursor;
    direction?: Direction;
    display?: Display;
    filter?: string;
    flexBasis?: FlexBasis;
    flexShrink?: FlexShrink;
    flexGrow?: FlexGrow;
    flex?: Flex;
    backgroundColor?: BackgroundColor;
    borderRadius?: BorderRadius;
    borderTopRightRadius?: BorderTopRightRadius;
    borderTopLeftRadius?: BorderTopLeftRadius;
    borderBottomLeftRadius?: BorderBottomLeftRadius;
    borderBottomRightRadius?: BorderBottomRightRadius;
    captionSide?: CaptionSide;
    clear?: Clear;
    clip?: Clip;
    columnCount?: ColumnCount;
    columnFill?: ColumnFill;
    columnGap?: ColumnGap;
    columnRule?: ColumnRule;
    columnRuleColor?: ColumnRuleColor;
    columnRuleStyle?: ColumnRuleStyle;
    columnRuleWidth?: ColumnRuleWidth;
    columnSpan?: ColumnSpan;
    columnWidth?: ColumnWidth;
    columns?: Columns;
    emptyCells?: EmptyCells;
    float?: Float;
    font?: Font;
    fontFamily?: FontFamily;
    fontSize?: FontSize;
    fontStyle?: FontStyle;
    fontWeight?: FontWeight;
    gap?: Gap;
    grid?: Grid;
    gridArea?: GridArea;
    gridAutoColumns?: GridAutoColumns;
    gridAutoFlow?: GridAutoFlow;
    gridAutoRows?: GridAutoRows;
    gridColumn?: GridColumn;
    gridColumnGap?: GridColumnGap;
    gridColumnEnd?: GridColumnEnd;
    gridColumnStart?: GridColumnStart;
    gridRow?: GridRow;
    gridGap?: GridGap;
    gridGapEnd?: GridGapEnd;
    gridGapRow?: GridGapRow;
    gridGapStart?: GridGapStart;
    gridTemplate?: GridTemplate;
    gridTemplateAreas?: GridTemplateAreas;
    gridTemplateColumns?: GridTemplateColumns;
    gridTemplateRows?: GridTemplateRows;
    height?: Height;
    justifyContent?: JustifyContent;
    letterSpacing?: LetterSpacing;
    lineHeight?: LineHeight;
    listStyle?: ListStyle;
    listStylePosition?: ListStylePosition;
    listStyleType?: ListStyleType;
    margin?: Margin;
    marginBottom?: MarginBottom;
    marginLeft?: MarginLeft;
    marginTop?: MarginTop;
    marginRight?: MarginRight;
    maxHeight?: MaxHeight;
    maxWidth?: MaxWidth;
    minHeight?: MinHeight;
    minWidth?: MinWidth;
    objectFit?: ObjectFit;
    objectPosition?: ObjectPosition;
    opacity?: Opacity;
    order?: Order;
    outline?: Outline;
    outlineStyle?: OutlineStyle;
    outlineWidth?: OutlineWidth;
    outlineColor?: OutlineColor;
    outlineOffset?: OutlineOffset;
    overflow?: Overflow;
    overflowWrap?: OverflowWrap;
    overflowX?: OverflowX;
    overflowY?: OverflowY;
    padding?: Padding;
    paddingBottom?: PaddingBotton;
    paddingLeft?: PaddingLeft;
    paddingRight?: PaddingRight;
    paddingTop?: PaddingTop;
    pointerEvents?: PointerEvents;
    position?: Position;
    rowGap?: RowGap;
    tableLayout?: TableLayout;
    textAlign?: TextAlign;
    textDecoration?: TextDecoration;
    textDecorationLine?: TextDecorationLine;
    textDecorationColor?: TextDecorationColor;
    textDecorationStyle?: TextDecorationStyle;
    textDecorationThickness?: TextDecorationThickness;
    textIndent?: TextIndent;
    textOverflow?: TextOverflow;
    textShadow?: TextShadow;
    textTransform?: TextTransform;
    transform?: Transform;
    transformOrigin?: TransformOrigin;
    transformStyle?: TransformStyle;
    transition?: Transition;
    transitionDelay?: TransitionDelay;
    transitionDuration?: TransitionDuration;
    transitionProperty?: TransitionProperty;
    transitionTimingFunction?: TransitionTimingFunction;
    userSelect?: UserSelect;
    verticalAlign?: Visibility;
    visibility?: VerticalAlign;
    whiteSpace?: WhiteSpace;
    width?: Width;
    wordBreak?: WordBreak;
    wordWrap?: WordWrap;
    wordSpacing?: WordSpacing;
    zIndex?: ZIndex;
}