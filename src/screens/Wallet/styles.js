import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Wrapper = styled.View`
    background: #000;
    flex: 1;
`

export const Header = styled(LinearGradient)`
    height: 300px;
`

export const HeaderContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
`

export const BalanceContainer = styled.View`
    margin: 10px 0;
    flex-direction: row;
    align-items: center;

`

export const Value = styled.Text`
    font-size: 38px;
    color: #fff;
    font-weight: 200;
`

export const Bold = styled.Text`
    font-weight: bold;
`

export const EyeButton = styled.TouchableOpacity`
    margin-left: 10px;
`

export const Info = styled.Text`
    color: #fff;
    font-size: 14px;
`

export const Actions = styled.View`
    flex-direction: row;
    margin-top: 40px;
`

export const Action = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.6)
    width: 150px;
    height: 40px;
    border-radius: 25px;
    margin: 0 10px;
`

export const ActionLabel = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-left: 10px;
`

export const UseBalance = styled.View`
    background: #1c1c1e;
    height: 60px;
    flex-direction: row;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
`

export const UseBalanceTitle = styled.Text`
    color: #fff;
    font-size: 16px;
`

export const PaymentMethods = styled.View`
    margin-top: 25px;
    padding: 0 16px;
`

export const PaymentMethodsTitle = styled.Text`
    color: #fff;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5)
`

export const Card = styled.View`
    background: #1e232a;
    padding: 15px;
    border-radius: 8px;
    margin-top: 10px;
`

export const CardBody = styled.View`
    flex-direction: row;
`

export const CardDetails = styled.View`
    flex: 1;
    margin-right: 20px;
`

export const CardTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`

export const CardInfo = styled.Text`
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 15px;
`

export const Img = styled.Image`
    width: 60px;
`

export const AddButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
`

export const AddLabel = styled.Text`
    color: #0db060;
    font-size: 18px;
    margin-left: 15px;
`

export const UseTicketButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 15px;
    `
    
export const UseTicketLabel = styled.Text`
    color: #0db060;
    margin-left: 15px;
    text-decoration: underline;
`