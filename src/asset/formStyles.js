import styled from 'styled-components';

export const FormContainer = styled.div`
max-width: 100%;
margin: 70px 40px;
background: #fff;
padding: 15px 20px;
border-top: 1px solid #e8e8e8;
@media (max-width: 768px) {
  margin: 70px 0;
}
h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.18px;
  color: var(--bglightdark);
  @media (max-width: 768px) {
    text-align: center;
  }
}
form {
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
     display: flex;
     flex-direction: column;
  };
  .form-group {
    &:nth-child(1){
      flex: 2
    }
    &:nth-child(2){
      flex: 1;
     
    }
  }
  input[type="text"] {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    padding: 12px 15px;
    background-color: #fff;
    border: 1px solid #e8e8e8;
    color: var(--bgfaintdark);
    font-size: 1rem;
    &::placeholder {
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.15px; 
      color: #c4c4c4;
    }
    
  }
  .addBtn {
      padding: 0.801rem 2.188rem 0.886rem 2.375rem;
      border-radius: 3px;
      background-color: #0290ff;
      border: none;
      font-family: 'Roboto Slab', serif;
      font-size: 0.813rem;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.5px;
      text-align: center;
      color: #fff;  
      text-transform: uppercase;
      cursor: pointer;
      &:hover { 
        background: #fff;
        border: 1px solid #0290ff;
        color: #0290ff;
      };
      
      @media (max-width: 768px) {
        width: 100%;
        padding: 10px 5px;
        margin: 0 auto;
      }
    
  }
 
}



`;

export const Select = styled.select`
   padding: 0.375rem 0.938rem 0.563rem 1rem;
   width: 100%;
   border-radius: 4px;
   height: 2.813rem;
   background-color: #fff;
   font-family: Montserrat;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.15px;
  color: var(--bgfaintdark);
  border: 1px solid #e8e8e8;
  @media (max-width: 768px) {
    width: 100%;
  }
  `;
