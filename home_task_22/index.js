class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    increment = () => this.setState({ counter: this.state.counter + 1, });
    decrement = () => {
        if (this.state.counter === 0) {
            return;
        }
        return this.setState({ counter: this.state.counter - 1, })
    }

    render() {
        const { counter } = this.state;
        return React.createElement(
            React.Fragment, null,
            React.createElement('h1', null, counter),
            React.createElement('button', { onClick: this.increment, }, '+'),
            React.createElement('button', { onClick: this.decrement, }, '-')
        );
    }
}

const reactElement = React.createElement(Counter, { title: 'Hello' });
const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

root.render(reactElement);