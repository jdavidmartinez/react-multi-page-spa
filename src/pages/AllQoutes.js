import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id:'q1', author:'Max', tect:'Learning React is fun... LOL'},
    {id:'q1', author:'David', tect:'Learning React is Hard... LOL'}
];
const AllQoutes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />

}

export default AllQoutes;