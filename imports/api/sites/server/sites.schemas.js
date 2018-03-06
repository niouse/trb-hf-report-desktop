
export const sitesSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Task name",
    max: 20,
	min : 3
  },
  content: {
    type: [Array],
    label: "Task description",
	max: 20,
	min : 0
  },
});
    