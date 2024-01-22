import Tag from "./Tag";

function SearchFilters({ setQuery }) {
  return (
    <div className="flex gap-3 p-6 bg-gray-100">
      <Tag setQuery={setQuery} from="filter" tagName="Digital" />
      <Tag setQuery={setQuery} from="filter" tagName="Codierung" />
      <Tag setQuery={setQuery} from="filter" tagName="Tech" />
      <Tag setQuery={setQuery} from="filter" tagName="Netz" />
      <Tag setQuery={setQuery} from="filter" tagName="Code" />
      <Tag setQuery={setQuery} from="filter" tagName="Finanzieren" />
    </div>
  );
}

export default SearchFilters;
