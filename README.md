# Codewars-FindMeTheNames

Please find my solution to the below Codewars kyu 5 kata;

    #Overview

    This function is supposed to take a string input containing 0 or more names as well as some text. It should locate all of the names and return them in the form of an array.

    Each person's name will be listed in the form "Name: sub-name1 sub-name2 sub-name3;". There will be between 1 and 3 sub-names for each person's "Name:" and the final subname will always be followed by a ";".

    ##A person's Name:

    Can be located in the input text by: "Name: name-here;"

    A name is made up of 1 to 3 subnames

    A sub-name is made up of one or more upper or lowercase letters

    However, a sub-name may be double barralled and can therefore contain a dash "-" between two sub-strings of alphabetic characters only. So "Name: Tony-Joe anDy robERT;" has first sub-name "Tony-Joe" and last sub-name "Robert"

    If a sub-name begins or ends with a dash "-", it should be considered a mistake and removed from the returned name. So "Name: -barack -obaMa-;" has first sub-name "Barack" and last sub-name "Obama"

    ##To be returned: An array whose elements correspond to each person's first sub-name and, if they have more than one sub-name, then also their last sub-name.

    One array element represents one person's name
    Each element should be of the form: "Last sub-name, first sub-name"
    If a person's name is made up of just one sub-name, the element should simply be "first sub-name"
    Capitalize first letter of each sub-name including double barralled names
    The rest of the letters should be lower case
    If there are no legitimate names in the input, then an empty array should be returned
    ##Some examples:

    getNames("Here is one person. Name: MarilYN MONroe;") 
    => ["Monroe, Marilyn"]

    getNames("Now we have 2 people.. Name: john fitzgerald kennedy; Name: STING;") 
    => ["Kennedy, John", "Sting"]

    getNames("Here is one name. Name: -voldemort-; and then we can add two more names. Name: ian BAKER-finch; Name: -Tara -jess -Palmer-Thompkinson;")
    => ["Voldemort", "Baker-Finch, Ian", "Palmer-Thompkinson, Tara"]
