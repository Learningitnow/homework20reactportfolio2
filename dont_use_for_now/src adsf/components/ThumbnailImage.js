function ThumbnailImage( props ){
    return (
        <img src={props.thumbnail} style={ {width: '100%'} } class="card-img-top" alt="thumbnail" />
    )
}

export default ThumbnailImage