- [ ] Why would you use class component over function components (removing hooks from the question)?
    Class Components are very common in the workplace, and have been around longer, therefore it's good to know of class compoentns. 
- [ ] Name three lifecycle methods and their purposes.
    render() = returns the this.state and this.props, and is a required method of class components.
    constructor() = initialized local state, and binds event handlers (if used)
    componentDidMount() = invoked immediately once component is mounted. Sets up state, which will rerender.  Cannot forget to unmount. 
- [ ] What is the purpose of a custom hook?
    Dry code, reusability, clean
- [ ] Why is it important to test our apps?
    Turning in code that hasn't been tested is a bad protocol.  Everything should be ensured running before turning it in to test for bugs, or errors. 