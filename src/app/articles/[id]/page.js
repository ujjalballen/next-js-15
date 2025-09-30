export default async function IndividualArticles({ params, searchParams }) {
  const { id } = await params;

  const { key, value } = await searchParams;

  return (
    <div>
      <div>Here is the page NO: {id}</div>
    {
        key && value ? (
            <div>This is Key: {key} and here is the value: {value}</div>
        ) : (
            <div></div>
        )
    }
    </div>
  );
}
