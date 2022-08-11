import styled from "styled-components";

export const Li = styled.li`
    display: flex;
    flex-direction: column;
    min-width: 288px;
    max-width: 300px;
    border: 2px solid var(--Grey-1);
    border-radius: 5px;

    @media screen and(min-width: 1024px) {
        & {
            min-width: 150px;
            max-width: 200px;
        }
    }

    img {
        height: 150px;
        object-fit: contain;
        background-color: var(--Grey-0);
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    .info {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        max-height: 100%;
        padding: 20px 18px 23px 20px;
        
        @media screen and (min-width: 768px) {          
            gap: 10px;  
        }
        @media screen and (min-width: 1024px) {          
            gap: 10px;
        }
    }

`;