import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList'

class App extends Component {
  // componentDidMount() function will always be called automatically when the component is mouting for the 1st time
  // it calls the fetchCats() action creator that comes from mapDispatchToPtopd() function
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  // from solution:
  handleLoading = () => {
    console.log(this.props.loading)
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }

  render() {
    console.log(this.props.catPics)
    return (
      <div>
        <h1>CatBook</h1>
        {/* add CatList component here */}
        {/* <CatList catPics={this.props.catPics} /> */}
        {this.handleLoading()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// To retrieve the data from fetch in our app:
// 1. import connect from react-redux
// 2. wrap connect arround App on the expprt line
// 3. write mapStateToProps() helper function
// 3.1 this function will be passed into connect
// 3.2 connect calls this function, passing in the state from the Redux store
// 3.3 any key/value pair returned by mapStateToProps() will become props in the App
// To test it: add a console.log in the render (empty array -> the empty cats array in our initial state inside reducer)

// 4. add a componentDidMount() function
// 5. write mapDispatchToProps() helper function and import the data from actions
// 5.1 pass the dispatch action as a props inside the componentDidMount()
// Console.log: The 3rd render shows up the data 
// (1st render: initial render, empty catPics array is always expected)
// (2nd render: occurs when we send the 1st dispatch - dispatch({type: 'LOADING_CATS'}), which happens before the fetch request is executed)

// 6. build a presentational compoenent (CatList)
// 7. render the presentation compoennt inside the App
// 7.1 pass the state as a props to the presententional component (catPics -> this.props.catPics)
// 8. CatList file/function should iterate over the cat pics and display each cat pic