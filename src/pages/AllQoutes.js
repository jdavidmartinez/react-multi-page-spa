import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id:'q1', author:'Max', text:'Learning React is fun... LOL'},
    {id:'q2', author:'David', text:'Learning React is Hard... LOL'}
];
const AllQoutes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />

}

export default AllQoutes;