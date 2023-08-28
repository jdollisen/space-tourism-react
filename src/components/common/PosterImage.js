export const PosterImage = (props) => {

  return(<>
    {props.data.map( (data, i) => {
      if (props.page === 'technology') {
        return (
          <picture hidden={(i === 0)?false:true} key={data.id} id={data.id + '-image'}>
            <source srcSet={data.images.landscape} media="(max-width: 45em)" sizes="110%" />
            <source srcSet={data.images.portrait} />
            <img src={data.images.portrait} alt={data.images.alt} />
          </picture>
        )
      } else {
        return (
          <picture hidden={(i === 0)?false:true} key={data.id} id={data.id + '-image'}>
            <source srcSet={data.images.webp} type="image/webp" />
            <img src={data.images.png} alt={data.images.alt} />
          </picture>
        )
      }
    })}
  </>)
}

