const Gallery = (sece) => {
    return(
        <div>
            <h2>Welcome to {sece.page} Page</h2>
            <img src="download.jpg" alt="SECE LOGO"></img>
            <h2>The image is {sece.image}</h2>
        </div>
    )
}
export default Gallery;