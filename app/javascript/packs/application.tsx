import React from 'react'
import ReactDOM from 'react-dom'

interface HelloProps {
  name: string
}

const Hello: React.SFC<HelloProps> = (props) => (
  <div>
    <p>Hello {props.name} !</p>
  </div>
)

Hello.defaultProps = {
  name: 'David',
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Hello name="React & TypeScript" />, document.body.appendChild(document.createElement('div')))
})
