import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";

interface SearchFormProps {
  totalQueryResults: number;
  setQueryString: (value: string) => void;
}

export const SearchForm = ({
  setQueryString,
  totalQueryResults = 0,
}: SearchFormProps) => {
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmitNewQuery(data: any) {
    setQueryString(data.querytext);
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSubmitNewQuery)}>
      <div>
        <label htmlFor="searchforminput">Publicações</label>
        <p>{totalQueryResults} publicações</p>
      </div>

      <input
        type="text"
        id="searchforminput"
        placeholder="Buscar conteúdo"
        {...register("querytext")}
      />
    </SearchFormContainer>
  );
};
