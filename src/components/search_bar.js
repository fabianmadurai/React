import React,{Component} from 'react';

class SearchBar extends Component{

            constructor(props){
                super(props);   //passes the props to the constructor of the parent class, which is Component in this case.
                this.state = {term:''};  //Initialises the state object
            }

            render (){
                  return (
                      <div className="search-bar">
                        <input
                        value={this.state.term}
                        onChange={event=> this.onInputChange(event.target.value)}/> 
                    </div>
                  );
            }
                onInputChange(term){
                        this.setState({term});
                        this.props.onSearchTermChange(term);
                }
};

export default SearchBar;