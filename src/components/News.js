import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spdata from './Spdata';
export class News extends Component {
  
   static defaultProps = 
   {
    country:'in',
    pageSize:15,
    category: 'general' 
   }
   capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


 
  constructor(props){
    super(props);
     this.state=
     {
      articles:[],
      loading:false,
      page:1,
      totalResults:0
     }
     document.title=`${this.capitalizeFirstLetter(this.props.category)}-NEWS HADLINES`;
   }
   newsupdate=async()=>
  {
    this.props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    this.setState({loading:true});
    let getdata = await data.json();
    this.setState({articles:getdata.articles, totalResults:getdata.totalResults, loading :false})
    this.props.setProgress(100); 
  }
  async componentDidMount()
   {
   this.newsupdate()
  } 
  enterPreviousData=async()=>
  {
   
    this.setState({page:this.state.page-1});
    this.newsupdate()
  }
  enterNextData=async()=>
  {
  this.setState({page:this.state.page+1});
  this.newsupdate()
  }
  fetchMoreData =async() => {
    // b9eac570049b4253a75bebe7b945d132
   this.setState({page:this.state.articles.page+1});
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   let data= await fetch(url);
   this.setState({loading:true});
   let getdata = await data.json();
   this.setState({articles:this.state.articles.concat(getdata.articles),totalResults:getdata.totalResults, loading :false})

  }


  render() {
    return (
      <>
        <h2 className='text-center'>NEWS HEDLINES-FOR PUBLIC {this.capitalizeFirstLetter(this.props.category)}</h2>
        {this.state.loading && <Spdata/>} 
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!== this.state.totalResults}
          loader={<Spdata/>}
        >
          <div className="container">
         <div className="row">
         {this.state.articles.map((element)=>{
             return <div className="col-md-4" key={element.url}>
             <NewsItem  title={element.title?element.title : ""} description={element.description?element.description :""} arther={element.author} date={element.publishedAt} imgurl={element.urlToImage}  newdata={element.url} source={element.source.name}/>
             </div>
         })}   
         </div>
         </div>
         </InfiniteScroll>
      </>
    )
}
}
export default News
