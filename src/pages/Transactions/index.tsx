import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionTable, TransactionsContainer } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header/>
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width='50%'>Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight variant="income">
                                    R$ 12.000,00
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2023</td>
                        </tr>
                        <tr>
                            <td width='50%'>Hamburger</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    - R$ 59,00
                                </PriceHighLight>
                            </td>
                            <td>Alimentação</td>
                            <td>20/04/2023</td>
                        </tr>
                    </tbody>
                </TransactionTable>
            </TransactionsContainer>
        </div>
    )
}