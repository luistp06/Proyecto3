import "./Header.css";
export const Header = () => `

<h1>Pinterest</h1>
<input type "text" id="searchInput" placeholder="Ex: cats"/>
<button id="searchbtn">Search</button>
<select id="numberInput">
<option value="10">10</option>
<option value="20">20</option>
<option value="30">30</option>
</select>
<select id="orientationInput">
<option value="squarish">Squarish</option>
<option value="landscape">Landscape</option>
<option value="portrait">Portrait</option>
</select>
`;