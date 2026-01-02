export const SETS = [
    {
        id: "sigon_helm",
        name: "Sigon's Visor",
        slot: "helm",
        type: "set",
        img: "images/sigon_helm.png",
        req: { str: 63, lvl: 6 },
        stats: {
            def: 25,
            mana: 30
        },
        bonus: {
            ar_lvl: [8, 2]
        }
    },
    {
        id: "sigon_gloves",
        name: "Sigon's Gage",
        slot: "gloves",
        type: "set",
        img: "images/sigon_gloves.png",
        req: { str: 60, lvl: 6 },
        stats: {
            ar: 20,
            str: 10
        },
        bonus: {
            ias: [30, 2]
        }
    },
    {
        id: "sigon_belt",
        name: "Sigon's Wrap",
        slot: "belt",
        type: "set",
		img: "images/sigon_belt.png",
        req: { str: 60, lvl: 6 },
        stats: {
            fr: 20,
            life: 20
        },
        bonus: {
            def_lvl: [2, 2]
        }
    },
    {
        id: "sigon_boots",
        name: "Sigon's Sabot",
        slot: "boots",
        type: "set",
		img: "images/sigon_boots.png",
        req: { str: 70, lvl: 6 },
        stats: {
            frw: 20,
            cr: 40
        },
        bonus: {
            ar: [50, 2],
            mf: [50, 3]
        }
    },
    {
        id: "sigon_armor",
        name: "Sigon's Shelter",
        slot: "body",
        type: "set",
        req: { str: 70, lvl: 6 },
        stats: {
            edef: 25,
            lr: 30
        },
        bonus: {
            thorns: [20, 2]
        }
    },
    {
        id: "sigon_shield",
        name: "Sigon's Guard",
        slot: "offhand",
        type: "set",
        req: { str: 60, lvl: 6 },
        stats: {
            skills: 1,
            block: 20
        },
        bonus: {
        }
    },
    {
        id: "hsarus_boots",
        name: "Hsarus' Iron Heel",
        slot: "boots",
        type: "set",
		img: "images/hsarus_boots.png",
        req: { str: 30, lvl: 3 },
        stats: {
            frw: 20,
			fr: 25
        },
        bonus: {
        }
    }
];