import iconSprite from '../../assets/images/icons-sprite.svg';

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox={props.viewBox || "0 0 24 24"}
             width={props.width || "16"}
             height={props.width || "16"}
             fill="none">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
        </svg>
    );
};
