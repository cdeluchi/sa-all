(function () {
    /* Create a variable to store a boolean indicating whether a tranistion
    is happening. */
    var isTransitioning;

    /* Store the collection of kitty elements and the collection's length in
    variables. */
    var kitties = document.getElementsByClassName("kitty");
    var numKitties = kitties.length;

    /* Get the collection of dot elements, convert it to an array, and store
    the result in a variable. We want an array rather than an array-like object
    so we can call array methods such as `forEach`. */
    var dots = [].slice.call(document.getElementsByClassName("dot"));

    /* Create a variable to store the value returned by the most recent call
    to `setTimeout`. */
    var timer;

    /* Create variables to store the indexes of the current and next kitty in
    the sequence and set their initial values. */
    var cur = 0,
        next = 1;

    /* Loop through the array of dot elements and add an event listener to\
    each one. The function passed to `forEach` will run once for every element
    and be passed the element and its index. The variable used for the index,
    `i`, never changes in this scope so when the event handler accesses it in
    the future it gets the index of the event target in the array. */
    dots.forEach(function (dot, i) {
        dot.addEventListener("click", function () {
            /* If the dot is already lit up, do nothing. */
            if (this.classList.contains("current")) {
                return;
            }

            /* If a transition is in progress, do nothing. */
            if (isTransitioning) {
                return;
            }

            /* Cancel the scheduled animation. */
            clearTimeout(timer);

            /* Set the variable that holds the index of the next kitty to the
            index of the dot that was clicked. */
            next = i;

            /* Do the animation now. */
            moveKitties();
        });
    });

    /* Add the transitionend event handler to the element containing all of the
    kitty elements. */
    document
        .getElementById("carousel")
        .addEventListener("transitionend", function (e) {
            /* If the target of the transitionend event is not the kitty
            element that just moved off screen, do nothing. */
            if (!e.target.classList.contains("exit-stage-left")) {
                return;
            }

            /* Make the kitty element that just went off screen on the left
            jump back to the off screen position on the right. */
            e.target.classList.remove("exit-stage-left");

            /* Start the clock to do it again. Store the value `setTimeout`
            returns in a variable so it can be cancelled if a dot is
            clicked. */
            timer = setTimeout(moveKitties, 5000);

            /* We know the transition is over. It is time to set the boolean
            that keeps track of whether the transition is happening to
            `false`. */
            isTransitioning = false;
        });

    /* Start the clock to do it the animation in 5 seconds. Store the value
    `setTimeout` returns in a variable so it can be cancelled if a dot is
    clicked. */
    timer = setTimeout(moveKitties, 5000);

    function moveKitties(n) {
        /* Remove the "onscreen" class from the current kitty and add the 
        class that makes it move off screen to it it. */
        kitties[cur].classList.remove("onscreen");
        kitties[cur].classList.add("exit-stage-left");

        /* Add the "onscreen" class to the next kitty. */
        kitties[next].classList.add("onscreen");

        /* Update the dots to indicate the change. */
        setDot(next);

        /* Update the variable keeping track of the current kitty. */
        cur = next;

        /* Update the variable keeping track of the next kitty, making sure
        that it stays within range. */
        next = cur + 1;
        if (next >= numKitties) {
            next = 0;
        }

        /* Set the variable keeping track of whether or not a transition is
        happening to `true`. */
        isTransitioning = true;
    }

    function setDot(n) {
        /* Remove the "current" class from any dot that has it. */
        for (var i = 0; dots[i]; i++) {
            dots[i].classList.remove("current");
        }

        /* Add the "current" class to the new current dot. */
        dots[n].classList.add("current");
    }

    /* Convert the list of kitty elements to an array and loop through it
    with `forEach`. */
    [].slice.call(kitties).forEach(function (kitty) {
        /* Create a variable to keep track of the x and y position of the
        touch. */
        var touch;

        /* Add event handlers for the "touchstart" and "touchend" events. */
        kitty.addEventListener("touchstart", function (e) {
            /* Store the initial touch coordinates. */
            touch = {
                x: e.changedTouches[0].screenX,
                y: e.changedTouches[0].screenY,
            };

            /* Prevent the default action so that there is no scrolling. */
            e.preventDefault();
        });
        kitty.addEventListener("touchend", function (e) {
            /* If a transition is happening, do nothing. */
            if (isTransitioning) {
                return;
            }

            /* Calculate the differences between the current touch position and
            the previous touch position on both the x and y axes. */
            var diffX = touch.x - e.changedTouches[0].screenX;
            var diffY = touch.y - e.changedTouches[0].screenY;

            /* If the difference of the y axis is bigger than the difference on
            the x axis, the swipe was vertical and should be ignored. */
            if (Math.abs(diffY) > Math.abs(diffX)) {
                return;
            }

            /* If the difference on the x axis was big enough and went from
            right to left, cancel the scheduled transition and do it
            immediately. */
            if (diffX > 10) {
                clearTimeout(timer);
                moveKitties();
            }
        });
    });
})();
