import React, { useState } from 'react'

const ExampleComponent = (props) => {
  const [email, setEmail] = useState(props.defaultEmail)

  const changeEmailHandler = (e) => {
    setEmail(e.target.value)
  }
  return <input type="text" value={email} onChange={changeEmailHandler} />;
}

export default ExampleComponent