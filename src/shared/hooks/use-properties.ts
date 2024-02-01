import {
  useGetSkillsQuery,
  useGetTemplateCreatorsQuery,
  useGetTemplateDirectionsQuery,
  useGetTemplateGradesQuery,
} from '@/features/template/services';
import { useGetStatusesQuery, useGetTypesQuery } from '@/features/tasks/servises';

export const useProperties = () => {
  const { data: directions, isLoading: isLoadingDirections } = useGetTemplateDirectionsQuery();
  const { data: grades, isLoading: isLoadingGrades } = useGetTemplateGradesQuery();
  const { data: creators, isLoading: isLoadingCreators } = useGetTemplateCreatorsQuery();
  const { data: statuses, isLoading: isLoadingStatuses } = useGetStatusesQuery();
  const { data: types, isLoading: isLoadingTypes } = useGetTypesQuery();
  const { data: skills, isLoading: isLoadingSkills } = useGetSkillsQuery();
  const isLoading =
    isLoadingDirections ||
    isLoadingGrades ||
    isLoadingCreators ||
    isLoadingStatuses ||
    isLoadingTypes ||
    isLoadingSkills;

  return {
    directions: directions ? directions : [],
    grades: grades ? grades : [],
    creators: creators
      ? creators.map((creator) => ({
          id: creator.id,
          value: `${creator.first_name} ${creator.last_name}`,
        }))
      : [],
    statuses: statuses ? statuses : [],
    types: types ? types : [],
    skills: skills ? skills : [],
    isLoading,
  };
};
