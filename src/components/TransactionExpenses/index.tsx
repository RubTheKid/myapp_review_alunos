import { EmployeesDTO } from "../../storage/EmployeesDTO";
import { inss, irf, liquido, vale } from "../functions/Index";

import {
  Container,
  Cabec,
  Name,
  Occupation,
  Footer,
  FooterData,
  Amount,
} from "./styles";
type Props ={ data: EmployeesDTO }

export function TransactionExpenses({data}:Props) {
  return (
    <Container>
      <Cabec>Nome</Cabec>
      <Name>{data.name}</Name>
      <Footer>
      <Cabec>Funcao</Cabec>
      <Cabec>Salário</Cabec>
      </Footer>
      <FooterData>
      <Name>{data.occupation}</Name>
      <Amount>R${data.salary}</Amount>
      </FooterData>
      
      <Footer>
        <Cabec>Inss</Cabec>
        
        <Cabec>IRF</Cabec>
      </Footer>

      <FooterData>
        <Amount>R${inss(data.salary)}</Amount>
        
        <Amount>R${irf(data.salary)}</Amount>
      </FooterData>

      <Footer>
        <Cabec>Salario Liquido</Cabec>
      </Footer>

      <FooterData>
        <Amount>R${liquido(data.salary)}</Amount>
      </FooterData>

    </Container>
  )
}
