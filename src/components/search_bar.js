import React,{Component} from 'react';

class SearchBar extends Component{

            constructor(props){
                super(props);   //passes the props to the constructor of the parent class, which is Component in this case.
                this.state = {term:'Fabian Madurai'};  //Initialises the state object
            }

            render (){
                  return (
                      <div>
                        <input
                        value={this.state.term}
                        onChange={event=> this.setState({term:event.target.value})}/> 
                    </div>
                  );
            }

};

export default SearchBar;