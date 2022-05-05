import { useCallback } from "react";

export function Header({
  value,
  onChangeValue,
}: {
  onChangeValue: (value: string) => void;
  value: string;
}) {
  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChangeValue(event.target.value);
    },
    [onChangeValue]
  );

  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__logo-title">TODO LIST</span>
      </div>
      <nav>
        <input
          type="text"
          className="section__films-filter_search-input"
          id="search-input"
        />
      </nav>
    </header>
  );
}
