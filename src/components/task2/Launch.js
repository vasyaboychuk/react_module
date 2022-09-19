import './Launch.css';

function Launch(props) {
    let{launch}=props;

    return (
        <div className={'launch'}>
            <h2>Name: {launch.mission_name}</h2>
            <h3>Year: {launch.launch_year}</h3>
            <img src={launch.links.mission_patch_small} alt={launch.name}/>
        </div>
    );
}

export default Launch;