var exercises = ["pullups", "pushups", "situps", "jogging", "plank", "curls"]
var coreExercises = ["situps", "plank"]

favExercises.onshow = function() {
  selExercises.clear()
    for (i = 0; i < exercises.length; i++)
      selExercises.addItem(exercises[i])
}

btnShow.onclick = function() {
   let chosen = selExercises.value
   if (chosen.sort().toString() == coreExercises.sort().toString())
      lblExercises.value = `You chose ${chosen[0]} and ${chosen[1]} - those are two core exercises.`
   else
      lblExercises.value = `You did not pick the two core exercises.`
}

btnMobileNav.onclick = function() {
  ChangeForm(mobileNav)
}
