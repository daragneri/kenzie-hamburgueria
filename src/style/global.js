import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    .App {

        width: 100%;
        height: 100%;
    }
    :root {

        //Primary Palete:

        --Green: #27AE60;

        //Grey Scale Palette:

        --White:  #FFFFFF;
        --Grey-0: #F5F5F5;
        --Grey-1: #E0E0E0;
        --Grey-2: #BDBDBD;
        --Grey-3: #828282;
        --Grey-4: #333333;

        //Feedback Palette:

        --Information: #155BCB;
        --Sucess:      #168821;
        --Warning:     #FFCD07;
        --Negative:    #E60000;
    }

    section, div, aside {

       display: flex;
       flex-direction: column;
       align-items: flex-start;
       justify-content: flex-start; 
    }

    a {
        text-decoration: none;
    }

    ul, ol, li {
        list-style: none;
    }

    button {
        cursor: pointer;
        border: none;
    }
`;
export const Container = styled.div`
    width: 100%;
    max-width: 1366px;
    margin: 0 auto;
    gap: 30px;
    align-items: center;
    padding: 0rem 1rem;
    
    @media screen and (min-width: 768px){
        max-width: 80%;
        align-items: flex-start;

    }
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 0;
    }
`;