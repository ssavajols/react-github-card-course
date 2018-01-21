# react-github-card-course

React training course with github search card

- Démonstration : [https://ssavajols.github.io/react-github-card-course/](https://ssavajols.github.io/react-github-card-course/)

## Install

```shell
npm install
```

## Run

```shell
# default: http://localhost:8080
npm start
```

### Controlled components

Controlled components are components that are controlled by react to render data.

Inputs can be controlled by react with the `state` attibutes and the state of the component can't differ from his `DOM` representation.

If we bind the input value to a `state` property, the input value can only be updated by the component state update.

If we bind the input value to a `props` property, the value can't be updated.

```jsx
class MyControlledComponent extends React.Component {

  ...

  handleChange = (event) => {
    this.setState({
      search: event.currentTarget.value
    });
  }

  render() {
    return <form onSubmit={this.onSearch}>
      <input type="text"
          placeholder="Search"
          onChange={this.handleChange}
          value={this.state.search}
          required />
      <input type="submit" value="Search" />
    </form>;
  }
}
```

### Uncontrolled components

Uncontrolled components are components where the `state` can diverge from the `DOM` representation.

Like inputs with no value attribute setted. The user can interact and change the input value without updating the component `state`.

```jsx
class MyUncontrolledComponent extends React.Component {

  ...

  handleChange = (event) => {
    this.setState({
      search: event.currentTarget.value
    });
  }

  render() {
    return <form onSubmit={this.onSearch}>
      <input type="text"
          placeholder="Search"
          onChange={this.handleChange}
          required />
      <input type="submit" value="Search" />
    </form>;
  }
}
```