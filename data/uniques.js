export const UNIQUES = [
    {
        id: "twitchthroe",
        name: "Twitchthroe",
        slot: "body",
        type: "unique",
        img: "images/twitchthroe.png",
        req: { str: 27, lvl: 16 },
        stats: {
            def: 25,
            block: 25,
            fhr: 20,
            ias: 20,
            dex: 10,
            str: 10
        }
    },
    {
        id: "steelclash",
        name: "Steelclash",
        slot: "offhand",
        type: "unique",
        img: "images/steelclash.png",
        req: { str: 47, lvl: 17 },
        stats: {
            pala_skills: 1,
			fbr: 20,
            block: 25,
            edef: [98],
            allres: 15,
            pdr: 3,
            lrad: 3
        }
    },
    {
        id: "bloodfist",
        name: "Bloodfist",
        slot: "gloves",
        type: "unique",
        img: "images/bloodfist.png",
        req: { lvl: 9 },
        stats: {
            def: 10,
            edef: [10, 20],
            ias: 10,
            fhr: 30,
            life: 40,
            mindmg: 5
        }
    },
    {
        id: "nagelring",
        name: "Nagelring",
        slot: "ring",
        type: "unique",
        req: { lvl: 7 },
        stats: {
            mdr: 3,
            ar: [50, 75],
            thorns: 3,
            mf: [15, 30]
        }
    },
    {
        id: "manaldheal",
        name: "Manald Heal",
        slot: "ring",
        type: "unique",
        req: { lvl: 15 },
        stats: {
            manaleech: [4, 7],
            replife: [5, 8],
            manareg: 20,
            life: 20
        }
    },
    {
        id: "soj",
        name: "Stone of Jordan",
        slot: "ring",
        type: "unique",
        req: { lvl: 29 },
        stats: {
            skills: 1,
            maxmana_increase: 25,
            lightning_dmg: [1, 12],
            mana: 20
        }
    },

];