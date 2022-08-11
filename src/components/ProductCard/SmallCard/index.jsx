import { ThemeCaption, ThemeTitle } from "../../../style/typography";
import { Li } from "./styles";

const SmallCard = () => {
    return (
        <Li>
            <div className="img-box">
                <Img src="" alt="" />
            </div>
            <div className="info-box">
                <ThemeTitle tag={'h4'} className={'title4'} color={'var(--Grey-4)'}>nome</ThemeTitle>
                <ThemeCaption>categoria</ThemeCaption>
            </div>
            <div className="button-box">
                <button>Remover</button>
            </div>
        </Li>
    )
};
export default SmallCard;
