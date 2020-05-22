var cardList = {
    cards: {
        basic_locations: [{
            cardTitle: "Figher Launch Bay",
            cardImage: "fighter_launch_bay.png",
            cardColour: "R",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: false,
            im_score: 7,
            cardCreditCost: 4,
            cardPowerCost: 1,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: false,
            cardLocationRestriction: true,
            cardDescription: "Cannot be placed with <span class='distanceModifier'> 3  </span> of the <i>Main Reactor</i>"
        }, {
            cardTitle: "Shield Generator",
            cardImage: "shield_generator.png",
            cardColour: "R",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: false,
            im_score: 4,
            cardCreditCost: 3,
            cardPowerCost: 1,
            cardMaxAdditionalPoints: 4,
            cardMaxPlayable: 1,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+2</span> for each additional power spent when playing <i>Shield Generator</i>"
        }, {
            cardTitle: "Turret",
            cardImage: "turret.png",
            cardColour: "R",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: true,
            im_score: 2,
            cardCreditCost: 1,
            cardPowerCost: 1,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for each <i>Turret</i> on the Station"
        }, {
            cardTitle: "Alien Bazaar",
            cardImage: "alien_bazaar.png",
            cardColour: "Y",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: true,
            im_score: 3,
            cardCreditCost: 3,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+2</span> if there are 3 more Green locations within <span class='distanceModifier'> 2  </span>"
        }, {
            cardTitle: "Customs",
            cardImage: "customs.png",
            cardColour: "Y",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: false,
            im_score: 3,
            cardCreditCost: 2,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='creditModifier'>+1</span> for each adjacent Yellow location"
        }, {
            cardTitle: "Energy Market",
            cardImage: "energy_market.png",
            cardColour: "Y",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: false,
            im_score: 2,
            cardCreditCost: 3,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='creditModifier'>+1</span> for each <i>Power Reactor</i> in the Station (Max <span class='creditModifier'>+3</span>)"
        }, {
            cardTitle: "Garden",
            cardImage: "garden.png",
            cardColour: "P",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: false,
            im_score: 3,
            cardCreditCost: 3,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> if there is no Red location within <span class='distanceModifier'> 3  </span>  <br><span class='pointModifier'>+1</span> if there is no <i>Power Station</i> within <span class='distanceModifier'> 2  </span>"
        }, {
            cardTitle: "Holographic Display Area",
            cardImage: "holographic_display_area.png",
            cardColour: "P",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: false,
            im_score: 2,
            cardCreditCost: 2,
            cardPowerCost: 1,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for every adjacent location"
        }, {
            cardTitle: "Restaurant",
            cardImage: "restaurant.png",
            cardColour: "P",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: false,
            im_score: 0,
            cardCreditCost: 3,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for every location type in the Station"
        }, {
            cardTitle: "Ambassador Quarters",
            cardImage: "ambassador_quarters.png",
            cardColour: "G",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: false,
            im_score: 2,
            cardCreditCost: 2,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> if placed adjacent to a Green location<br><span class='midSpacer'>OR</span><br><span class='pointModifier'>+2</span> if placed adjacent to <i>Embassy Offices</i>"
        }, {
            cardTitle: "Council Room",
            cardImage: "council_room.png",
            cardColour: "G",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: true,
            im_score: 3,
            cardCreditCost: 3,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: 1,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for each other station that does not contain a <i>Council Room</i>"
        }, {
            cardTitle: "Embassy Offices",
            cardImage: "embassy_offices.png",
            cardColour: "G",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: false,
            im_score: 2,
            cardCreditCost: 2,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "You may choose another player when you build this location. They gain <span class='pointModifier'>+1</span> and you gain <span class='pointModifier'>+2</span>"
        }, {
            cardTitle: "Command Centre",
            cardImage: "command_centre.png",
            cardColour: "B",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: true,
            im_score: 0,
            cardCreditCost: 5,
            cardPowerCost: 1,
            cardMaxAdditionalPoints: 8,
            cardMaxPlayable: 1,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for each Blue location on the Station"
        }, {
            cardTitle: "Crew Quarters",
            cardImage: "crew_quarters.png",
            cardColour: "B",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: false,
            im_score: 1,
            cardCreditCost: 1,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+2</span> if placed adjacent to another <i>Crew Quarters</i>"
        }, {
            cardTitle: "Docking Bay",
            cardImage: "docking_bay.png",
            cardColour: "B",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: false,
            im_score: 1,
            cardCreditCost: 3,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: 4,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for each location between <i>Docking Bay</i> and <i>Main Reactor</i>"
        }, {
            cardTitle: "Medical Facility",
            cardImage: "medical_facility.png",
            cardColour: "B",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: false,
            im_score: 3,
            cardCreditCost: 3,
            cardPowerCost: 1,
            cardMaxAdditionalPoints: 4,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for each <i>Power Reactor</i> within <span class='distanceModifier'> 3  </span> of <i>Medical Facility</i>"
        }, {
            cardTitle: "Security Station",
            cardImage: "security_station.png",
            cardColour: "B",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: true,
            im_score: 2,
            cardCreditCost: 2,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> if <i>Security Station</i> has 4 adjacent locations"
        }, {
            cardTitle: "Transportation Platform",
            cardImage: "transportation_platform.png",
            cardColour: "B",
            type: "basic",
            cardDeck: "Base",
            cardQuantity: {
                p3: 3,
                p4: 4
            },
            cardEndGame: false,
            im_score: 1,
            cardCreditCost: 1,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for each <i>Transportation Plaform</i> in the Station"
        }],
        s_locations: [{
            cardTitle: "Alliance Fleet Base",
            cardImage: "alliance_fleet_base.png",
            cardColour: "R",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: true,
            im_score: 4,
            cardCreditCost: 3,
            cardPowerCost: 1,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+2</span> if you have more Red locations than Green locations"
        }, {
            cardTitle: "Heavy Ion Cannon",
            cardImage: "Heavy_ion_cannon.png",
            cardColour: "R",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: false,
            im_score: 6,
            cardCreditCost: 3,
            cardPowerCost: 2,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+2</span> if you have 3 or more <i>Power Reactors</i> in the Station"
        }, {
            cardTitle: "Pilot Training Area",
            cardImage: "pilot_training_area.png",
            cardColour: "R",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: false,
            im_score: 2,
            cardCreditCost: 2,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span>if placed adjacent to a Red location<br><span class='midSpacer'>OR</span><br><span class='pointModifier'>+2</span>if placed adjacent to <i>Fighter Launch Bay</i>"
        }, {
            cardTitle: "Turret",
            cardImage: "turret.png",
            cardColour: "R",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 1,
            cardEndGame: true,
            im_score: 2,
            cardCreditCost: 1,
            cardPowerCost: 1,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for each <i>Turret</i> on the Station"
        }, {
            cardTitle: "War Room",
            cardImage: "war_room.png",
            cardColour: "R",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: true,
            im_score: 0,
            cardCreditCost: 3,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: 5,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for each Red location on the Station"
        }, {
            cardTitle: "Business Offices",
            cardImage: "business_offices.png",
            cardColour: "Y",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: false,
            im_score: 1,
            cardCreditCost: 1,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "Pay up to <span class='creditModifier2'>6</span> and put them on this card. At the end of the year, you get them back. <span class='pointModifier'>+1</span> for every <span class='creditModifier2'>2</span> you put on the card"
        }, {
            cardTitle: "Galactic Bank",
            cardImage: "galactic_bank.png",
            cardColour: "Y",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: false,
            im_score: 4,
            cardCreditCost: 3,
            cardPowerCost: 1,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "At the beginning of every remaining year, you receive <span class='creditModifier'>+1</span>"
        }, {
            cardTitle: "Market Place",
            cardImage: "market_place.png",
            cardColour: "Y",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: false,
            im_score: 2,
            cardCreditCost: 3,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "Choose up to 2 other players. Get a combination of <span class='creditModifier2'>2</span> from them"
        }, {
            cardTitle: "Trade Union Headquarters",
            cardImage: "trade_union_headquarters.png",
            cardColour: "Y",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: false,
            im_score: 1,
            cardCreditCost: 4,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: 5,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for each Yellow location on the Station"
        }, {
            cardTitle: "Galactic Resort",
            cardImage: "galactic_resort.png",
            cardColour: "P",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: true,
            im_score: 0,
            cardCreditCost: 3,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: 5,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for each Purple location in the Station"
        }, {
            cardTitle: "Observation Dome",
            cardImage: "observation_dome.png",
            cardColour: "P",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: false,
            im_score: 3,
            cardCreditCost: 2,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: true,
            cardDescription: "You may not place other locations adjacent to <i>Observation Dome</i>"
        }, {
            cardTitle: "Opera House",
            cardImage: "opera_house.png",
            cardColour: "P",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: true,
            im_score: 1,
            cardCreditCost: 2,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for each different adjacent location type"
        }, {
            cardTitle: "Sports Arena",
            cardImage: "sports_arena.png",
            cardColour: "P",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: false,
            im_score: 3,
            cardCreditCost: 3,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for every year remaining"
        }, {
            cardTitle: "Alien Temple",
            cardImage: "alien_temple.png",
            cardColour: "G",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: true,
            im_score: 0,
            cardCreditCost: 3,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: 5,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for each Green location in the Station"
        }, {
            cardTitle: "Alliance Headquarters",
            cardImage: "alliance_headquarters.png",
            cardColour: "G",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: true,
            im_score: 4,
            cardCreditCost: 4,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: 1,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for each other Station with more Red locations than yours"
        }, {
            cardTitle: "Galactic Research Council",
            cardImage: "galactic_research_facility.png",
            cardColour: "G",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: false,
            im_score: 3,
            cardCreditCost: 3,
            cardPowerCost: 1,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "Each <b>other</b> player secretly chooses up to <span class='creditModifier2'>3</span> to pay and gains that amount in <span class='pointModifier2'>  </span><br>You gain <span class='pointModifier2'>  </span> equal to the highest amount paid, plus one"
        }, {
            cardTitle: "School of Alien Culture",
            cardImage: "school_of_alien_cultures.png",
            cardColour: "G",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: false,
            im_score: 2,
            cardCreditCost: 3,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "Each other player secretly chooses to either pay <span class='creditModifier2'>1</span> or lose <span class='pointModifier'> 2 </span>.  You get <span class='pointModifier'>+2</span> for each <span class='creditModifier2'>1</span> paid"
        }, {
            cardTitle: "Backup Reactor",
            cardImage: "backup_reactor.png",
            cardColour: "B",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: false,
            im_score: 2,
            cardCreditCost: 2,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "Add one energy to <i>Main Reactor</i><br><span class='pointModifier'>+1</span> if placed adjacent to <i>Main Reactor</i>"
        }, {
            cardTitle: "Cargo Hold",
            cardImage: "cargo_hold.png",
            cardColour: "B",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: false,
            im_score: 2,
            cardCreditCost: 2,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> if placed next to Blue location<br><span class='midSpacer'>OR</span><br><span class='pointModifier'>+2</span> if placed next to <i>Docking Bay</i>"
        }, {
            cardTitle: "Communications Beacon",
            cardImage: "communications_beacon.png",
            cardColour: "B",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: true,
            im_score: 2,
            cardCreditCost: 2,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+2</span> if <i>Communications Beacon</i> is the location furthest from the <i>Main Reactor</i>"
        }, {
            cardTitle: "Life Support Systems",
            cardImage: "life_support.png",
            cardColour: "B",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: true,
            im_score: 0,
            cardCreditCost: 4,
            cardPowerCost: 1,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for every 3 locations in the Station"
        }, {
            cardTitle: "Solar Panels",
            cardImage: "solar_panels.png",
            cardColour: "B",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 2,
            cardEndGame: false,
            im_score: 2,
            cardCreditCost: 1,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: true,
            cardDescription: "May only be built adjacent to a <i>Power Reactor</i>. Add a power cube to that Reactor"
        }, {
            cardTitle: "Transportation Platform",
            cardImage: "transportation_platform.png",
            cardColour: "B",
            type: "S",
            cardDeck: "Base",
            cardQuantity: 1,
            cardEndGame: false,
            im_score: 1,
            cardCreditCost: 1,
            cardPowerCost: 0,
            cardMaxAdditionalPoints: false,
            cardMaxPlayable: false,
            cardFunction: true,
            cardLocationRestriction: false,
            cardDescription: "<span class='pointModifier'>+1</span> for each <i>Transportation Plaform</i> in the Station"
        }],
        conflict: [],
        objectives: []
    }
}

var discardList = {
    cards: [{
        cardTitle: "Figher Launch Bay",
        cardImage: "fighter_launch_bay.png",
        cardColour: "R",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: false,
        im_score: 7,
        cardCreditCost: 4,
        cardPowerCost: 1,
        cardMaxAdditionalPoints: false,
        cardMaxPlayable: false,
        cardFunction: false,
        cardLocationRestriction: true,
        cardDescription: "Cannot be placed with <span class='distanceModifier'> 3  </span> of the <i>Main Reactor</i>"
    }, {
        cardTitle: "Shield Generator",
        cardImage: "shield_generator.png",
        cardColour: "R",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: false,
        im_score: 4,
        cardCreditCost: 3,
        cardPowerCost: 1,
        cardMaxAdditionalPoints: 4,
        cardMaxPlayable: 1,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "<span class='pointModifier'>+2</span> for each additional power spent when playing <i>Shield Generator</i>"
    }, {
        cardTitle: "Turret",
        cardImage: "turret.png",
        cardColour: "R",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: true,
        im_score: 2,
        cardCreditCost: 1,
        cardPowerCost: 1,
        cardMaxAdditionalPoints: false,
        cardMaxPlayable: false,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "<span class='pointModifier'>+1</span> for each <i>Turret</i> on the Station"
    }, {
        cardTitle: "Alien Bazaar",
        cardImage: "alien_bazaar.png",
        cardColour: "Y",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: true,
        im_score: 3,
        cardCreditCost: 3,
        cardPowerCost: 0,
        cardMaxAdditionalPoints: false,
        cardMaxPlayable: false,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "<span class='pointModifier'>+2</span> if there are 3 more Green locations within <span class='distanceModifier'> 2  </span>"
    }, {
        cardTitle: "Customs",
        cardImage: "customs.png",
        cardColour: "Y",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: false,
        im_score: 3,
        cardCreditCost: 2,
        cardPowerCost: 0,
        cardMaxAdditionalPoints: false,
        cardMaxPlayable: false,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "<span class='creditModifier'>+1</span> for each adjacent Yellow location"
    }, {
        cardTitle: "Energy Market",
        cardImage: "energy_market.png",
        cardColour: "Y",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: false,
        im_score: 2,
        cardCreditCost: 3,
        cardPowerCost: 0,
        cardMaxAdditionalPoints: false,
        cardMaxPlayable: false,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "<span class='creditModifier'>+1</span> for each <i>Power Reactor</i> in the Station (Max <span class='creditModifier'>+3</span>)"
    }, {
        cardTitle: "Garden",
        cardImage: "garden.png",
        cardColour: "P",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: false,
        im_score: 3,
        cardCreditCost: 3,
        cardPowerCost: 0,
        cardMaxAdditionalPoints: false,
        cardMaxPlayable: false,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "<span class='pointModifier'>+1</span> if there is no Red location within <span class='distanceModifier'> 3  </span>  <br><span class='pointModifier'>+1</span> if there is no <i>Power Station</i> within <span class='distanceModifier'> 2  </span>"
    }, {
        cardTitle: "Holographic Display Area",
        cardImage: "holographic_display_area.png",
        cardColour: "P",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: false,
        im_score: 2,
        cardCreditCost: 2,
        cardPowerCost: 1,
        cardMaxAdditionalPoints: false,
        cardMaxPlayable: false,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "<span class='pointModifier'>+1</span> for every adjacent location"
    }, {
        cardTitle: "Restaurant",
        cardImage: "restaurant.png",
        cardColour: "P",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: false,
        im_score: 0,
        cardCreditCost: 3,
        cardPowerCost: 0,
        cardMaxAdditionalPoints: false,
        cardMaxPlayable: false,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "<span class='pointModifier'>+1</span> for every location type in the Station"
    }, {
        cardTitle: "Ambassador Quarters",
        cardImage: "ambassador_quarters.png",
        cardColour: "G",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: false,
        im_score: 2,
        cardCreditCost: 2,
        cardPowerCost: 0,
        cardMaxAdditionalPoints: false,
        cardMaxPlayable: false,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "<span class='pointModifier'>+1</span> if placed adjacent to a Green location<br><span class='midSpacer'>OR</span><br><span class='pointModifier'>+2</span> if placed adjacent to <i>Embassy Offices</i>"
    }, {
        cardTitle: "Council Room",
        cardImage: "council_room.png",
        cardColour: "G",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: true,
        im_score: 3,
        cardCreditCost: 3,
        cardPowerCost: 0,
        cardMaxAdditionalPoints: false,
        cardMaxPlayable: 1,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "<span class='pointModifier'>+1</span> for each other station that does not contain a <i>Council Room</i>"
    }, {
        cardTitle: "Embassy Offices",
        cardImage: "embassy_offices.png",
        cardColour: "G",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: false,
        im_score: 2,
        cardCreditCost: 2,
        cardPowerCost: 0,
        cardMaxAdditionalPoints: false,
        cardMaxPlayable: false,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "You may choose another player when you build this location. They gain <span class='pointModifier'>+1</span> and you gain <span class='pointModifier'>+2</span>"
    }, {
        cardTitle: "Command Centre",
        cardImage: "command_centre.png",
        cardColour: "B",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: true,
        im_score: 0,
        cardCreditCost: 5,
        cardPowerCost: 1,
        cardMaxAdditionalPoints: 8,
        cardMaxPlayable: 1,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "<span class='pointModifier'>+1</span> for each Blue location on the Station"
    }, {
        cardTitle: "Crew Quarters",
        cardImage: "crew_quarters.png",
        cardColour: "B",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: false,
        im_score: 1,
        cardCreditCost: 1,
        cardPowerCost: 0,
        cardMaxAdditionalPoints: false,
        cardMaxPlayable: false,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "<span class='pointModifier'>+2</span> if placed adjacent to another <i>Crew Quarters</i>"
    }, {
        cardTitle: "Docking Bay",
        cardImage: "docking_bay.png",
        cardColour: "B",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: false,
        im_score: 1,
        cardCreditCost: 3,
        cardPowerCost: 0,
        cardMaxAdditionalPoints: 4,
        cardMaxPlayable: false,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "<span class='pointModifier'>+1</span> for each location between <i>Docking Bay</i> and <i>Main Reactor</i>"
    }, {
        cardTitle: "Medical Facility",
        cardImage: "medical_facility.png",
        cardColour: "B",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: false,
        im_score: 3,
        cardCreditCost: 3,
        cardPowerCost: 1,
        cardMaxAdditionalPoints: 4,
        cardMaxPlayable: false,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "<span class='pointModifier'>+1</span> for each <i>Power Reactor</i> within <span class='distanceModifier'> 3  </span> of <i>Medical Facility</i>"
    }, {
        cardTitle: "Security Station",
        cardImage: "security_station.png",
        cardColour: "B",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: true,
        im_score: 2,
        cardCreditCost: 2,
        cardPowerCost: 0,
        cardMaxAdditionalPoints: false,
        cardMaxPlayable: false,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "<span class='pointModifier'>+1</span> if <i>Security Station</i> has 4 adjacent locations"
    }, {
        cardTitle: "Transportation Platform",
        cardImage: "transportation_platform.png",
        cardColour: "B",
        type: "basic",
        cardDeck: "Base",
        cardQuantity: {
            p3: 3,
            p4: 4
        },
        cardEndGame: false,
        im_score: 1,
        cardCreditCost: 1,
        cardPowerCost: 0,
        cardMaxAdditionalPoints: false,
        cardMaxPlayable: false,
        cardFunction: true,
        cardLocationRestriction: false,
        cardDescription: "<span class='pointModifier'>+1</span> for each <i>Transportation Plaform</i> in the Station"
    }]
}