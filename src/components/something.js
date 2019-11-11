<body>
    <div id="root"></div>
    <script type="text/jsx">
        class Toggle extends React.Component 
            { state = { on: true } 
            changeState = () => { this.setState({on: !this.state.on } ) }; 
            
            render () { 
                const text = this.state.on ? this.props.true : this.props.false 
                const color = this.state.on ? "button on" : "button off" 
            return (
              <div>
                 <div className={color} onClick={this.changeState}>
                    <div className="text">{text}</div>
                    <div className="circle"> </div>
                </div>
              </div>
         