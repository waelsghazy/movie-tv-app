import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const TrendItem = ({trending, media_type}) => {
    return (
            <Container>
        <Link 
            to={'/trendDetails/'+media_type+'/'+trending.id} 
            className="link"
        >
            <div className="trending-card position-relative">
            {trending.poster_path ?
                <img 
                    src={'https://image.tmdb.org/t/p/w500'+trending.poster_path} 
                    alt={trending.id}
                    className='w-100 h-100'
                />
                :
                    ''
                }
                {trending.profile_path ?
                <img 
                    src={`{imgSrc}+trending.profile_path`} 
                    alt={trending.id}
                    className='w-100 h-100'
                />
                :
                    ''
                }
                {!trending.poster_path &&
                !trending.profile_path?
                <img 
                src='
                https://th.bing.com/th/id/OIP.ADL8aPiXLE3RhVyPKYaomAHaFd?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                alt={trending.id}
                />
            :
            ''}
            <div 
                className="
                    position-absolute top-0 end-0 p-2 text-center vote
                "
            >
                {trending.vote_average?.toFixed(1)}
            </div>
            <p 
                className="text-center mt-2"
            >   
                    {trending.title} {trending.name}
                </p>
                <div 
                style={{
                    display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '1rem'
                }}>
                <p>
                {media_type === "tv" ? "TV Series" : "Movie"}
                </p>
                <p>
                    {trending.release_date} {trending.first_air_date}
                </p>
                </div>
            </div>
        </Link>
            </Container>
    )
}

export default TrendItem