import { Redirect } from 'react-router-dom'

type Props ={
    auth: boolean;
}

export const There = ({auth}: Props): JSX.Element  => {
    if(!auth) {
       return <Redirect to='/' push />
    } else {
        return (
            <div>
                There
            </div>
        )
    }
   
}
