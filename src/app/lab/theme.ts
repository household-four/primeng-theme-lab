

export interface Primitive {
    borderRadius: BorderRadius;
    emerald: ColorPalette;
    green: ColorPalette;
    lime: ColorPalette;
    red: ColorPalette;
    orange: ColorPalette;
    amber: ColorPalette;
    yellow: ColorPalette;
    teal: ColorPalette;
    cyan: ColorPalette;
    sky: ColorPalette;
    blue: ColorPalette;
    indigo: ColorPalette;
    violet: ColorPalette;
    purple: ColorPalette;
    fuchsia: ColorPalette;
    pink: ColorPalette;
    rose: ColorPalette;
    slate: ColorPalette;
    gray: ColorPalette;
    zinc: ColorPalette;
    neutral: ColorPalette;
    stone: ColorPalette;
}

export interface Semantic {
    transitionDuration: string;
    focusRing: FocusRing;
    disabledOpacity: string;
    iconSize: string;
    anchorGutter: string;
    primary: ColorPalette;
    formField: FormField;
    list: List;
    content: {
        borderRadius: string;
    };
    mask: {
        transitionDuration: string;
    };
    navigation: Navigation;
    overlay: Overlay;
    colorScheme: {
        light: ColorSchemeDefinition;
        dark: ColorSchemeDefinition;
    };
}

export interface ColorPalette {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
}

export interface SurfaceScale extends ColorPalette {
    0: string;
}

export interface BorderRadius {
    none: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export interface FocusRing {
    width: string;
    style: string;
    color: string;
    offset: string;
    shadow: string;
}

export interface FormField {
    paddingX: string;
    paddingY: string;
    sm: {
        fontSize: string;
        paddingX: string;
        paddingY: string;
    };
    lg: {
        fontSize: string;
        paddingX: string;
        paddingY: string;
    };
    borderRadius: string;
    focusRing: FocusRing;
    transitionDuration: string;
}

export interface List {
    padding: string;
    gap: string;
    header: {
        padding: string;
    };
    option: {
        padding: string;
        borderRadius: string;
    };
    optionGroup: {
        padding: string;
        fontWeight: string;
    };
}

export interface Navigation {
    list: {
        padding: string;
        gap: string;
    };
    item: {
        padding: string;
        borderRadius: string;
        gap: string;
    };
    submenuLabel: {
        padding: string;
        fontWeight: string;
    };
    submenuIcon: {
        size: string;
    };
}

export interface Overlay {
    select: {
        borderRadius: string;
        shadow: string;
    };
    popover: {
        borderRadius: string;
        padding: string;
        shadow: string;
    };
    modal: {
        borderRadius: string;
        padding: string;
        shadow: string;
    };
    navigation: {
        shadow: string;
    };
}

export interface ColorSchemeDefinition {
    surface: SurfaceScale;
    primary: PrimaryScheme;
    highlight: Highlight;
    mask: Mask;
    formField: {
        background: string;
        disabledBackground: string;
        filledBackground: string;
        filledHoverBackground: string;
        filledFocusBackground: string;
        borderColor: string;
        hoverBorderColor: string;
        focusBorderColor: string;
        invalidBorderColor: string;
        color: string;
        disabledColor: string;
        placeholderColor: string;
        invalidPlaceholderColor: string;
        floatLabelColor: string;
        floatLabelFocusColor: string;
        floatLabelActiveColor: string;
        floatLabelInvalidColor: string;
        iconColor: string;
        shadow: string;
    };
    text: {
        color: string;
        hoverColor: string;
        mutedColor: string;
        hoverMutedColor: string;
    };
    content: {
        background: string;
        hoverBackground: string;
        borderColor: string;
        color: string;
        hoverColor: string;
    };
    overlay: {
        select: {
            background: string;
            borderColor: string;
            color: string;
        };
        popover: {
            background: string;
            borderColor: string;
            color: string;
        };
        modal: {
            background: string;
            borderColor: string;
            color: string;
        };
    };
    list: SchemeList;
    navigation: SchemeNavigation;
}

export interface PrimaryScheme {
    color: string;
    contrastColor: string;
    hoverColor: string;
    activeColor: string;
}

export interface SchemeList {
    option: SchemeListOption;
    optionGroup: {
        background: string;
        color: string;
    };
}

export interface SchemeNavigationItem {
    focusBackground: string;
    activeBackground: string;
    color: string;
    focusColor: string;
    activeColor: string;
    icon: {
        color: string;
        focusColor: string;
        activeColor: string;
    };
}

export interface SchemeNavigation {
    item: SchemeNavigationItem;
    submenuLabel: {
        background: string;
        color: string;
    };
    submenuIcon: {
        color: string;
        focusColor: string;
        activeColor: string;
    };
}

export interface SchemeListOption {
    focusBackground: string;
    selectedBackground: string;
    selectedFocusBackground: string;
    color: string;
    focusColor: string;
    selectedColor: string;
    selectedFocusColor: string;
    icon: {
        color: string;
        focusColor: string;
    };
}

export interface Mask {
    background: string;
    color: string;
}
