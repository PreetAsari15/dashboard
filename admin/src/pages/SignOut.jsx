import React from 'react'
import { useNavigate } from 'react-router-dom'
import { links } from '../resources/dummy'
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import {Auth} from "aws-amplify"
const styles = {
  button: {
    marginRight: 30,
    marginLeft: 30,
    height: 50,
    width: "100%",
  },
};
const SignOut = () => {

  const navigate = useNavigate();

  const onClick = async () => {
    await Auth.signOut()
    window.location.reload()
  }
  return (
    <div className='signout mt-4'>
      <p className='text-xl mb-3'>
        Signout?
      </p>
      <ButtonComponent
            type="submit"
            cssClass="e-danger"
            isDanger={true}
            style={styles.button}
            onClick={onClick}
          >
            Sign Out
          </ButtonComponent>
    </div>
  )
}

export default SignOut
