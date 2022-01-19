import styled from 'styled-components';

export const CardsContainer = styled.div`
background: #fff;
margin: 40px;
max-width: 100%;
`;

export const CardDetail = styled.div`
display: flex;
background: #fff;
width: 100%;
border: 1px solid #e8e8e8;
margin-top: 40px;
padding: 15px 20px;
height: 100%`;

export const CardText = styled.div`
flex: 2;
.cat {
    opacity: 0.5;
    font-family: Montserrat;
    font-size: 0.875rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #121212;
    width: 3.063rem;
}
.title {
  font-family: 'Roboto Slab', serif;
  font-size: 1.375rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.2px;
  color: #121212;
  margin-top: -5px;
  text-transform: capitalize;
}

.author {
    
    font-family: 'Roboto Slab', serif;
    font-size: 0.875rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4386bf;
    margin-top: -15px;
}

.btn {
    background: #fff;
    border: none;
    padding: 15px 15px 15px 0px;
    font-family: 'Roboto Slab', serif;
    font-size: 0.875rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4386bf;
    text-align: center;
    cursor: pointer;
    &:hover { color: #121212;}
   
}
`;

export const CardImg = styled.div`
display: flex;
flex-direction: row;
flex: 1;
gap: 20px;
`;

export const CircularContainer = styled.div`
margin-top: 10px;
width: 80px;
align-self: center;
 
`;

export const CardImgText = styled.div`
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
h2 {
  font-family: Montserrat;
  font-size: 2rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
h3 {
    margin-top: -10px;
    opacity: 0.5;
  font-family: Montserrat;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
}
`;

export const CardChapter = styled.div`
flex: 1;
justify-self: center;
aligh-self: center;
margin-top: 10px;
h3 {
    opacity: 0.5;
    font-family: 'Roboto Slab', serif;
    font-size: 0.813rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #121212;
    text-transform: uppercase;
}
h4 {
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.4px;
    color: #121212;
}

.progress {
  font-family: 'Roboto Slab', serif;
  font-size: 0.813rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  text-align: center;
  color: #fff;
  padding: 0.438rem 1.188rem 0.5rem 1.375rem;
  border-radius: 3px;
  background-color: #0290ff;
  border: none;
  text-transform: uppercase;
}
`;
