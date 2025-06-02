// Helper function to format dates (Month Year - Month Year or Present)
export const formatDateRange = (startDate, endDate) => {
    if (!startDate) return "Date N/A";
    const startParts = startDate.split("/");
    if (startParts.length !== 2) return `${startDate} - ${endDate}`; // Fallback for unexpected format
  
    const start = new Date(`20${startParts[1]}-${startParts[0]}-01`);
    const options = { year: "numeric", month: "short" };
    const formattedStart = start.toLocaleDateString("en-US", options);
  
    if (endDate && endDate.toLowerCase() === "present") {
      return `${formattedStart} - Present`;
    }
    if (endDate && endDate.includes("/")) {
      // Assuming format MM/YYYY
      const endParts = endDate.split("/");
      if (endParts.length !== 2) return `${formattedStart} - ${endDate}`;
      const end = new Date(`20${endParts[1]}-${endParts[0]}-01`);
      const formattedEnd = end.toLocaleDateString("en-US", options);
      return `${formattedStart} - ${formattedEnd}`;
    }
    return endDate ? `${formattedStart} - ${endDate}` : formattedStart; // Fallback for other formats or single date
  };