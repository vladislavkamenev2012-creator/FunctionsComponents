import type { City } from "../data/city";

type CityInfoProps = Pick<City, "name" | "country" | "founded" | "description">

export function CityInfo({name, country, founded, description }: CityInfoProps) {
    return (
        <section className="city-info" aria-labelledby="city-name">
            <p className="eyebrow"> Explore the city</p>
            <h1 id="city-name">
                {name}, {country}
            </h1>
            <p className="description">{description}</p>
            <p className="founded">
                <span>Founded</span> {founded}
            </p>
        </section>
    );
}