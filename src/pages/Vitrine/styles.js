import styled from "styled-components";

export const Header = styled.header`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 10vh;

    padding: 0.8rem 0rem;
    gap: 19px;

    background-color: var(--Grey-0);

    .header-box {

        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 14px;
        padding: 0rem 1rem;

        img {
        max-width: 158px;
        height: 23px;
        max-height: 37px;
    }

    input {
        width: 100%;
        max-width: 365px;
        padding: 14px 15px;

        border-radius: 8px;
        border: 1px solid var(--Grey-0);

        &::placeholder {
            color: var(--Grey-2);
        }
        @media screen and (min-width: 1024px) {
            width: 35%;
        }
    }
       
        @media screen and (min-width:600px) {
          width: 80%;
          flex-direction: row; 
          justify-content: space-between;
        }
    }

`;
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 90vh;
    padding: 2rem 0rem;
    background-color: var(--White);

    @media screen and (min-width: 1024px) {
       flex-direction: row;
       justify-content: center;
    }
`;
export const Section = styled.section`

    width: 100%;
    gap: 30px;
    
    @media screen and (min-width: 1024px) {
        max-width: 60%;
    }

`;
export const List = styled.ul`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    min-height: 346px;
    height: 100%;
    
    max-width: 100%;
    gap: 20px;

    @media screen and (min-width: 1024px) {
      flex-wrap: wrap;
      overflow-x: hidden;  
    }
`;

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 0px 0px 5px 5px;

    .aside-top {
        background-color: var(--Green);
        width: 100%;
        padding: 22px 20px 13px 20px;
        border-radius: 5px 5px 0px 0px;
    }

    .aside-middle {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 100%;
        min-height: 158px;      
        
    }
    

    @media screen and (min-width: 1024px){
        width: 35%;
        max-width: 365px;
    }

`;