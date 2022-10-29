import React from 'react'
import recommendations from '../resource/json/recommendations.json'
import Bet from '../components/Bet'
import Suggestions from '../components/Suggestions'
import RoyalWings from '../modules/RoyalWings'

export default function Proposal ({position}) {
    return (
        <main className={`watch__section proposal ${position}`}>
            <section className="proposal__content">
                {recommendations.recommendations.map ((movie) => (
                    <Bet key={movie.title} { ...movie } />
                ))}
                
                <RoyalWings />
            </section>
            
            <aside className="proposal__datasheet">
                {recommendations.recommendations.map ((movie) => (
                    <Suggestions key={movie.title} { ...movie } />
                ))}
            </aside>
        </main>
    )
}
