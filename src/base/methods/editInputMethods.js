export default function toggleGuestProperty(property, id) {
  this.setState({
    inputs: this.state.inputs.map(input => {
      if (id === input.id) {
        return {
          ...input,
          [property]: !input[property],
        };
      }
      return input;
    }),
  });
}
