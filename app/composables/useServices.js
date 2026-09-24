export const useServices = () => {
  const { tm, rt } = useI18n();

  return computed(() => {
    const all = tm("nav.services");
    return Object.entries(all)
      .filter(([key]) => key !== "title")
      .map(([key, value]) => ({ key, label: rt(value) }))
      .filter((s) => s.label && s.label !== s.key);
  });
};