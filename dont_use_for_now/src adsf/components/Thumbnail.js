import ThumbnailImage from './ThumbnailImage'

function Thumbnail( props ){
    return (
        <div class="img-thumbnail" style={ {width: '300px'} } >
            <ThumbnailImage thumbnail={props.thumbnail} />
            
            <div class='text-muted'>{props.caption}</div>
        </div>
    )
}

export default Thumbnail