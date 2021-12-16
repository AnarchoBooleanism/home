const Example = (props) => {
    const example = props.examples;

    return (
      <div className="Example">
        <div className="flex-container">
            <div>
                <h1>{ example.title }</h1>
                <h2>{ example.subtitle }</h2>
                <p>{ example.description }</p>
                <p>{ example.extraText }</p>
                <div class="buttonWrapper">
                { example.links.map((link) => (
                    <a href={ link.url } className="linkButton">{ link.title }</a>
                )) }
                </div>
            </div>
            <div>
                <a href={ example.links[0].url }>
                    <div>
                        <div class="imageBox">
                            <img src={ example.image } alt="Project example"></img>
                        </div>
                    </div>
                </a>
            </div>
        </div>
      </div>
    );
  }

export default Example;