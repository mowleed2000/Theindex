// Local Business AI Visibility Index - Data Store
// Version 1.0 - February 2026

const IndexData = {
    // Metadata
    meta: {
        lastUpdated: "February 2026",
        version: "1.0",
        totalBusinesses: 36,
        totalRegions: 2
    },

    // Regions
    regions: [
        { id: "luton", name: "Luton", count: 18, lastUpdated: "Feb 2026" },
        { id: "brentford", name: "Brentford", count: 18, lastUpdated: "Feb 2026" }
    ],

    // Sectors
    sectors: [
        "Barbershops",
        "Cafés",
        "Dentists",
        "Pubs",
        "Restaurants",
        "Trade Services"
    ],

    // Classification definitions
    classifications: {
        clear: {
            label: "Clear",
            definition: "Public signals allow consistent automated interpretation."
        },
        ambiguous: {
            label: "Ambiguous",
            definition: "Signals exist but introduce uncertainty or misclassification risk."
        },
        uninterpretable: {
            label: "Uninterpretable",
            definition: "Signals are insufficient for reliable automated interpretation."
        }
    },

    // Business entries
    businesses: [
        // LUTON - Barbershops
        { id: "LUT-001", name: "Blade & Fade Barbershop", sector: "Barbershops", region: "luton", locality: "Town Centre", classification: "clear", assessed: "Feb 2026" },
        { id: "LUT-002", name: "Classic Cuts Luton", sector: "Barbershops", region: "luton", locality: "Bury Park", classification: "ambiguous", assessed: "Feb 2026" },
        { id: "LUT-003", name: "The Gentleman's Room", sector: "Barbershops", region: "luton", locality: "Farley Hill", classification: "uninterpretable", assessed: "Feb 2026" },
        { id: "LUT-004", name: "Sharp Edge Barbers", sector: "Barbershops", region: "luton", locality: "Lewsey", classification: "clear", assessed: "Feb 2026" },
        { id: "LUT-005", name: "Trim & Style", sector: "Barbershops", region: "luton", locality: "Stopsley", classification: "ambiguous", assessed: "Jan 2026" },
        { id: "LUT-006", name: "Crown Barbers", sector: "Barbershops", region: "luton", locality: "Town Centre", classification: "uninterpretable", assessed: "Jan 2026" },

        // LUTON - Dentists
        { id: "LUT-007", name: "Luton Dental Practice", sector: "Dentists", region: "luton", locality: "Town Centre", classification: "clear", assessed: "Feb 2026" },
        { id: "LUT-008", name: "Parkside Dental Clinic", sector: "Dentists", region: "luton", locality: "Wardown", classification: "clear", assessed: "Feb 2026" },
        { id: "LUT-009", name: "Family Dental Care", sector: "Dentists", region: "luton", locality: "Bury Park", classification: "ambiguous", assessed: "Feb 2026" },
        { id: "LUT-010", name: "Stopsley Dental Surgery", sector: "Dentists", region: "luton", locality: "Stopsley", classification: "uninterpretable", assessed: "Jan 2026" },
        { id: "LUT-011", name: "Whitesmile Dentistry", sector: "Dentists", region: "luton", locality: "Leagrave", classification: "ambiguous", assessed: "Jan 2026" },
        { id: "LUT-012", name: "Chapel Street Dental", sector: "Dentists", region: "luton", locality: "Town Centre", classification: "clear", assessed: "Jan 2026" },

        // LUTON - Restaurants
        { id: "LUT-013", name: "The Old Mill Kitchen", sector: "Restaurants", region: "luton", locality: "Town Centre", classification: "ambiguous", assessed: "Feb 2026" },
        { id: "LUT-014", name: "Spice Garden", sector: "Restaurants", region: "luton", locality: "Bury Park", classification: "clear", assessed: "Feb 2026" },
        { id: "LUT-015", name: "Corner House Grill", sector: "Restaurants", region: "luton", locality: "Stopsley", classification: "uninterpretable", assessed: "Feb 2026" },
        { id: "LUT-016", name: "Marina's Italian", sector: "Restaurants", region: "luton", locality: "Town Centre", classification: "clear", assessed: "Jan 2026" },
        { id: "LUT-017", name: "The Hungry Fox", sector: "Restaurants", region: "luton", locality: "Farley Hill", classification: "ambiguous", assessed: "Jan 2026" },
        { id: "LUT-018", name: "Golden Dragon", sector: "Restaurants", region: "luton", locality: "Town Centre", classification: "uninterpretable", assessed: "Jan 2026" },

        // BRENTFORD - Pubs
        { id: "BRE-001", name: "The Griffin", sector: "Pubs", region: "brentford", locality: "High Street", classification: "clear", assessed: "Feb 2026" },
        { id: "BRE-002", name: "The Beehive", sector: "Pubs", region: "brentford", locality: "Brentford Lock", classification: "clear", assessed: "Feb 2026" },
        { id: "BRE-003", name: "The Weir", sector: "Pubs", region: "brentford", locality: "Boston Manor", classification: "ambiguous", assessed: "Feb 2026" },
        { id: "BRE-004", name: "O'Brien's", sector: "Pubs", region: "brentford", locality: "High Street", classification: "uninterpretable", assessed: "Feb 2026" },
        { id: "BRE-005", name: "The Magpie & Crown", sector: "Pubs", region: "brentford", locality: "Town Centre", classification: "ambiguous", assessed: "Jan 2026" },
        { id: "BRE-006", name: "The Express Tavern", sector: "Pubs", region: "brentford", locality: "Kew Bridge", classification: "clear", assessed: "Jan 2026" },

        // BRENTFORD - Cafés
        { id: "BRE-007", name: "Dock Coffee", sector: "Cafés", region: "brentford", locality: "Brentford Lock", classification: "clear", assessed: "Feb 2026" },
        { id: "BRE-008", name: "The Morning Room", sector: "Cafés", region: "brentford", locality: "High Street", classification: "ambiguous", assessed: "Feb 2026" },
        { id: "BRE-009", name: "Canal Side Café", sector: "Cafés", region: "brentford", locality: "Brentford Lock", classification: "uninterpretable", assessed: "Feb 2026" },
        { id: "BRE-010", name: "Steam & Bean", sector: "Cafés", region: "brentford", locality: "Town Centre", classification: "clear", assessed: "Jan 2026" },
        { id: "BRE-011", name: "The Grind House", sector: "Cafés", region: "brentford", locality: "Boston Manor", classification: "ambiguous", assessed: "Jan 2026" },
        { id: "BRE-012", name: "Rosie's Kitchen", sector: "Cafés", region: "brentford", locality: "High Street", classification: "uninterpretable", assessed: "Jan 2026" },

        // BRENTFORD - Trade Services
        { id: "BRE-013", name: "Brentford Plumbing Co", sector: "Trade Services", region: "brentford", locality: "Town Centre", classification: "clear", assessed: "Feb 2026" },
        { id: "BRE-014", name: "A1 Electrical Services", sector: "Trade Services", region: "brentford", locality: "Boston Manor", classification: "ambiguous", assessed: "Feb 2026" },
        { id: "BRE-015", name: "Westside Roofing", sector: "Trade Services", region: "brentford", locality: "Kew Bridge", classification: "uninterpretable", assessed: "Feb 2026" },
        { id: "BRE-016", name: "Thames Valley Heating", sector: "Trade Services", region: "brentford", locality: "High Street", classification: "clear", assessed: "Jan 2026" },
        { id: "BRE-017", name: "Quick Fix Handyman", sector: "Trade Services", region: "brentford", locality: "Town Centre", classification: "ambiguous", assessed: "Jan 2026" },
        { id: "BRE-018", name: "Premier Decorators", sector: "Trade Services", region: "brentford", locality: "Brentford Lock", classification: "uninterpretable", assessed: "Jan 2026" }
    ],

    // Helper functions
    getByRegion: function (regionId) {
        return this.businesses.filter(b => b.region === regionId);
    },

    getBySector: function (sector) {
        return this.businesses.filter(b => b.sector === sector);
    },

    getByClassification: function (classification) {
        return this.businesses.filter(b => b.classification === classification);
    },

    getRegionStats: function (regionId) {
        const regionBusinesses = this.getByRegion(regionId);
        return {
            total: regionBusinesses.length,
            clear: regionBusinesses.filter(b => b.classification === "clear").length,
            ambiguous: regionBusinesses.filter(b => b.classification === "ambiguous").length,
            uninterpretable: regionBusinesses.filter(b => b.classification === "uninterpretable").length
        };
    },

    getSectorStats: function (regionId, sector) {
        const businesses = this.businesses.filter(b => b.region === regionId && b.sector === sector);
        return {
            total: businesses.length,
            clear: businesses.filter(b => b.classification === "clear").length,
            ambiguous: businesses.filter(b => b.classification === "ambiguous").length,
            uninterpretable: businesses.filter(b => b.classification === "uninterpretable").length
        };
    }
};
