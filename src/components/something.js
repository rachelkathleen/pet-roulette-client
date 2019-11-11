<body>
    <div id="root"></div>
    <script type="text/jsx">
        class Toggle extends React.Component 
            { state = { on: true } 
            changeState = () => { this.setState({on: !this.state.on } ) }; 
            
